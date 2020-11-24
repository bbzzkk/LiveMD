package com.livemd.document.exception;

import io.jsonwebtoken.JwtException;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.NoSuchElementException;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(value= NoSuchElementException.class)
    public ErrorMessage handleArgumentException(){
        return new ErrorMessage(404, false);
    }

    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler(value = RuntimeException.class)
    public ErrorMessage handleDupilcateException(){
        return new ErrorMessage(500, false);
    }

    @ResponseStatus(HttpStatus.FORBIDDEN)
    @ExceptionHandler(value = JwtException.class)
    public ErrorMessage handleToken(String message){
        return new ErrorMessage(403, false);
    }
}
