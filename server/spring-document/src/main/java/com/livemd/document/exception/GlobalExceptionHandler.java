package com.livemd.document.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler(value=RuntimeException.class)
    public ErrorMessage handleArgumentException(){
        return new ErrorMessage(500, false);
    }
}
