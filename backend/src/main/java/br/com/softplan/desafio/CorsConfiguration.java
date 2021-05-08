package br.com.softplan.desafio;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfiguration implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000"
//                    ,"http://192.168.0.110:3000", // ip local laptop
//                    "http://192.168.0.111:3000", // ip local smartphone
                ).allowedMethods("GET", "POST", "DELETE", "PUT");
    }

}
