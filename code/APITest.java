package tss;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import weatherAPI.*;
import hotelAPI.*;
import flightAPI.*;

import java.time.LocalDate;
import java.util.List;

/**
 * Tests for WeatherAPI, HotelAPI, and FlightAPI
 * Covers: Unit, White-box, Black-box, Regression, Integration tests
 */
public class APITest {

    private static WeatherAPI weatherAPI;
    private static HotelAPI hotelAPI;
    private static FlightAPI flightAPI;

    @BeforeAll
    static void setup() {
        weatherAPI = new OpenWeatherAPI();
        hotelAPI = new RapidAPI();
        flightAPI = new BookingAPI();
    }

    @Test
    void testGetWeatherValidCity() {
        WeatherData data = weatherAPI.getWeather("Tokyo", LocalDate.now());
        assertNotNull(data, "WeatherData should not be null");
        assertTrue(data.getTemperature() > -100 && data.getTemperature() < 100, "Temperature should be realistic");
        assertNotNull(data.getCondition(), "Condition should not be null");
    }

    @Test
    void testGetWeatherInvalidCity() {
        WeatherData data = weatherAPI.getWeather("InvalidCityNameXYZ", LocalDate.now());
        assertNotNull(data, "WeatherData should not be null even for invalid city");
        assertEquals("Unavailable", data.getCondition(), "Condition should be 'Unavailable' for bad city");
    }

    @Test
    void testGetHotelsValidCity() {
        List<HotelData> hotels = hotelAPI.getHotels("Los Angeles", "2025-06-01", "2025-06-03");
        assertNotNull(hotels, "Hotels list should not be null");
        assertFalse(hotels.isEmpty(), "Hotels list should not be empty for valid city");
        for (HotelData hotel : hotels) {
            assertNotNull(hotel.getHotelName(), "Hotel name should not be null");
            assertTrue(hotel.getLowestRoomRate() > 0, "Hotel rate should be positive");
        }
    }

    @Test
    void testGetHotelsInvalidCity() {
        List<HotelData> hotels = hotelAPI.getHotels("FakeCityXYZ", "2025-06-01", "2025-06-03");
        assertNotNull(hotels, "Hotels list should not be null even for invalid city");
        assertTrue(hotels.isEmpty(), "Hotels list should be empty for invalid city");
    }

    @Test
    void testGetFlightsValidRoute() {
        List<FlightData> flights = flightAPI.getFlights("LAX", "JFK", "2025-06-01");
        assertNotNull(flights, "Flights list should not be null");
        assertFalse(flights.isEmpty(), "Flights list should not be empty for valid route");
        for (FlightData flight : flights) {
            assertNotNull(flight.getAirline(), "Airline name should not be null");
            assertTrue(flight.getPrice() > 0, "Flight price should be positive");
            assertNotNull(flight.getFlightNumber(), "Flight number should not be null");
        }
    }

    @Test
    void testGetFlightsInvalidRoute() {
        List<FlightData> flights = flightAPI.getFlights("XXX", "YYY", "2025-06-01");
        assertNotNull(flights, "Flights list should not be null even for invalid route");
        assertTrue(flights.isEmpty(), "Flights list should be empty for invalid route");
    }

    @Test
    void testIntegrationWeatherHotelFlight() {
        String city = "Paris";
        String checkIn = "2025-07-01";
        String checkOut = "2025-07-03";

        WeatherData weather = weatherAPI.getWeather(city, LocalDate.parse(checkIn));
        List<HotelData> hotels = hotelAPI.getHotels(city, checkIn, checkOut);
        List<FlightData> flights = flightAPI.getFlights("LAX", "CDG", checkIn); // CDG = Paris airport

        assertNotNull(weather, "Weather should not be null");
        assertTrue(weather.getCondition() != null, "Weather condition should be valid");

        assertNotNull(hotels, "Hotels should not be null");
        assertFalse(hotels.isEmpty(), "Hotels should not be empty for Paris");

        assertNotNull(flights, "Flights should not be null");
        assertFalse(flights.isEmpty(), "Flights should not be empty for Paris route");
    }

    @Test
    void testWeatherAPIRegression() {
        WeatherData data = weatherAPI.getWeather("Seoul", LocalDate.now());
        assertNotNull(data, "WeatherData should still work after updates");
        assertNotNull(data.getCondition(), "Weather condition should still be retrievable");
    }

    @Test
    void testHotelAPIRegression() {
        List<HotelData> hotels = hotelAPI.getHotels("New York", "2025-08-01", "2025-08-03");
        assertNotNull(hotels, "Hotels should still be fetched after code updates");
    }

    @Test
    void testFlightAPIRegression() {
        List<FlightData> flights = flightAPI.getFlights("SFO", "LHR", "2025-08-01");
        assertNotNull(flights, "Flights should still be fetched correctly after code updates");
    }
}
