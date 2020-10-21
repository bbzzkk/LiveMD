package com.livemd.document.controller;

import com.livemd.document.dto.UserDocumentsListResponseDto;
import com.livemd.document.dto.UserDocumentsResponseDto;
import com.livemd.document.dto.UserDocumentsSaveRequestDto;
import com.livemd.document.dto.UserDocumentsTitleUpdateRequestDto;
import com.livemd.document.service.UserDocumentsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class UserDocumentsApiController {

    private final UserDocumentsService service;

    @PostMapping("/api/v1/documents")
    public Long create(@RequestBody UserDocumentsSaveRequestDto requestDto){
        return service.create(requestDto);
    }

    @PutMapping("/api/v1/documents/{id}")
    public Long update(@PathVariable Long id, @RequestBody UserDocumentsTitleUpdateRequestDto requestDto){
        return service.update(id, requestDto);
    }

    @GetMapping("/api/v1/documents/{id}")
    public UserDocumentsResponseDto findBydId(@PathVariable Long id){
        return service.findById(id);
    }

    @DeleteMapping("/api/v1/documents/{id}")
    public Long delete(@PathVariable Long id){
        service.delete(id);
        return id;
    }

    @GetMapping("/api/v1/documents/list")
    public List<UserDocumentsListResponseDto> findAll() {
        return service.findAll();
    }


}
