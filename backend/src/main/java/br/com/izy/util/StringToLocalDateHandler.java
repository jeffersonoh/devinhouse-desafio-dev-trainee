package br.com.izy.util;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class StringToLocalDateHandler {
	
	public static LocalDate ConverteStringToLocalDate(String stringDate) {
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
		
		LocalDate date = LocalDate.parse(stringDate, formatter);
		
		return date;
	}
	
}
