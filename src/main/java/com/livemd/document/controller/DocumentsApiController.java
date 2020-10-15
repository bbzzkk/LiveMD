package com.livemd.document.controller;

import com.livemd.document.dto.DocumentsSaveRequestDto;
import com.livemd.document.service.DocumentsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class DocumentsApiController {

    private final DocumentsService service;

    @PostMapping("/api/v1/documents")
    public Long save(@RequestBody DocumentsSaveRequestDto requestDto){
        return service.save(requestDto);
    }
}
