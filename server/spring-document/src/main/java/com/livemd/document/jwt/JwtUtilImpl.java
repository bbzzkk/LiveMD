package com.livemd.document.jwt;

import io.jsonwebtoken.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class JwtUtilImpl implements JwtUtil {

    //유효성 검사
    private static String SECRET_KEY;

    @Value("${jwt.secret}")
    public void setSecretKey(String value){
        this.SECRET_KEY = value;
    }


    @Override
    public boolean isUsable(String givenToken) {
        try{
            Jws<Claims> claims = Jwts.parser()
                    .setSigningKey(SECRET_KEY.getBytes())
                    .parseClaimsJws(givenToken);
            return true;
        } catch (JwtException e){
            if(log.isInfoEnabled()){
                e.printStackTrace();
            }else {
                log.error(e.getMessage());
            }
            throw new JwtException("JWT Error");
        }
    }
}
