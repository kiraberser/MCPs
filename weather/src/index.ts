import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// Create server instance
const server = new McpServer({
  name: "weather",
  version: "1.0.0",
});

const getWeather = async (city: string) => {
    try {
        // Primero obtenemos las coordenadas de la ciudad
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`);
        const data = await response.json();
        // Verificar si hay resultados
        if (!data.results || data.results.length === 0) {
            return { error: "Ciudad no encontrada" };
        }
        const results = data.results[0];
        const { longitude, latitude } = results;
        // Obtener los datos del clima con las coordenadas
        const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current=is_day,temperature_2m,rain,wind_speed_10m&forecast_days=1`);
        // Obtener los datos del clima como JSON

        return weatherResponse.json();
    }
    catch (error) {
        console.error(error);
        return { error: "Error fetching weather data" };
    }
};

server.tool(
    'get-weather',
    'Tool to get the weather for a city',
    {
        city: z.string().describe('The city to get the weather for')
    },
    async ({ city }) => {
        const weather = await getWeather(city);
        if (!weather) {
            return {
                content: [{
                    type: 'text',
                    text: 'Error fetching weather data'
                }]
            }
        }
        return {
            content: [{
                type: 'text',
                text: JSON.stringify(weather, null, 2)
            }]
        }
    }   
);

const transport = new StdioServerTransport();
server.connect(transport);

