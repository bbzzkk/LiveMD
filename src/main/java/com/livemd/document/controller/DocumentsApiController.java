package com.livemd.document.controller;

import com.livemd.document.dto.DocumentsListResponseDto;
import com.livemd.document.dto.DocumentsResponseDto;
import com.livemd.document.dto.DocumentsSaveRequestDto;
import com.livemd.document.dto.DocumentsTitleUpdateRequestDto;
import com.livemd.document.service.DocumentsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class DocumentsApiController {

    private final DocumentsService service;

    @PostMapping("/api/v1/documents")
    public Long save(@RequestBody DocumentsSaveRequestDto requestDto){
        return service.save(requestDto);
    }

    @PutMapping("/api/v1/documents/{id}")
    public Long update(@PathVariable Long id, @RequestBody DocumentsTitleUpdateRequestDto requestDto){
        return service.update(id, requestDto);
    }

    @GetMapping("/api/v1/documents/{id}")
    public DocumentsResponseDto findBydId(@PathVariable Long id){
        return service.findById(id);
    }

    @DeleteMapping("/api/v1/documents/{id}")
    public Long delete(@PathVariable Long id){
        service.delete(id);
        return id;
    }

    @GetMapping("/api/v1/documents/list")
    public List<DocumentsListResponseDto> findAll() {
        return service.findAll();
    }


}
