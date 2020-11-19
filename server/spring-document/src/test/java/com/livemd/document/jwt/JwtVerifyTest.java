package com.livemd.document.jwt;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.ConfigFileApplicationContextInitializer;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.env.Environment;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import static org.assertj.core.api.AssertionsForInterfaceTypes.assertThat;

//@ContextConfiguration(initializers = ConfigFileApplicationContextInitializer.class)
//@TestPropertySource(locations = "classpath:test.properties")
@RunWith(SpringRunner.class)
@SpringBootTest
public class JwtVerifyTest {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private Environment environment;


    private static String SECRET_KEY;

    @Value("${jwt.secret}")
    public void setSecretKey(String value){
        this.SECRET_KEY = value;
    }


    public static String createToken(){

        Map<String, Object> headers = new HashMap<>();
        headers.put("typ", "JWT");
        headers.put("alg", "HS256");

        Map<String, Object> payloads = new HashMap<>();
        Date now = new Date();
        Long expiredTime = 1000 * 60l;
        Date newTime = new Date();
        now.setTime(now.getTime() + expiredTime);

        System.out.println(">>>>>>>>>>>>>>>>>>");
        payloads.put("iss", "yzz");
        payloads.put("sub", "soyoung");
        payloads.put("iat", now);
        payloads.put("exp", newTime);
        System.out.println(SECRET_KEY);
        String jwt = Jwts.builder()
                .setHeader(headers)
                .setClaims(payloads)
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY.getBytes())
                .compact();
        return jwt;
    }

    @Test
    public void testVerifyJwt(){
        String givenToken = createToken();
//        System.out.println(givenToken);
//        System.out.println(SECRET_KEY);
//        System.out.println(jwtUtil);
        assertThat(jwtUtil.isUsable(givenToken)).isTrue();
    }
}
