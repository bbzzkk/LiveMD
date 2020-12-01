package com.livemd.document.config;

import com.livemd.document.config.interceptor.JwtAuthInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {

    // @Autowired
    // private JwtAuthInterceptor jwtAuthInterceptor;
    //CORS 해결
    @Override
    public void addCorsMappings(CorsRegistry registry){
        registry.addMapping("/**");
    }

    //JwtAuth interceptor 추가
    // @Override
    // public void addInterceptors(InterceptorRegistry registry){
    //     registry.addInterceptor(jwtAuthInterceptor)
    //             .addPathPatterns("/api/v1/documents/**");
    // }
}
