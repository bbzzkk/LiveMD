package com.livemd.document.config.interceptor;

import com.livemd.document.jwt.JwtUtil;
import io.jsonwebtoken.JwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class JwtAuthInterceptor implements HandlerInterceptor {


    @Autowired
    private JwtUtil jwtUtil;

    private String HEADER_TOKEN_KEY = "Authorization";


    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws JwtException{
        String givenToken = request.getHeader(HEADER_TOKEN_KEY);

        if(givenToken != null && jwtUtil.isUsable(givenToken)){
           return true;
        }
        throw new JwtException("JWT EXCEPTION");
    }
}
