package devtrainee.ejnn.backend.services;

import org.springframework.stereotype.Component;
import org.springframework.context.annotation.Bean;

import org.modelmapper.ModelMapper;

@Component
public class MapperFactory {

    @Bean
    public ModelMapper modelMapper() {
	return new ModelMapper();
    }
    
}
