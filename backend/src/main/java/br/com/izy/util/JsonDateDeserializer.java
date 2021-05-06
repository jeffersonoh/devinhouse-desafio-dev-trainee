package br.com.izy.util;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;

public class JsonDateDeserializer extends JsonDeserializer<LocalDate> {
	@Override
  public LocalDate deserialize(JsonParser jsonParser,
          DeserializationContext deserializationContext) throws IOException, JsonProcessingException {

			DateTimeFormatter format = DateTimeFormatter.ofPattern("dd/MM/yyyy");
      String date = jsonParser.getText();
      try {
          return LocalDate.parse(date, format);
      } catch (Error error) {
          throw new RuntimeException("Vish");
      }

  }
}
