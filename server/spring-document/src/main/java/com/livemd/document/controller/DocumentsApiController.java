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
    public Long create(@RequestParam(value = "oid") String oid, @RequestBody DocumentsSaveRequestDto requestDto){
        return service.create(oid, requestDto);
    }

    @GetMapping("/api/v1/documents")
    public List<DocumentsListResponseDto> findAll(@RequestParam(value = "oid") String oid) {
        return service.findAllByOwner(oid);
    }

    @GetMapping("/api/v1/documents/{docId}")
    public DocumentsResponseDto findByDocId(@PathVariable String docId){
        return service.findByDocId(docId);
    }

    @PutMapping("/api/v1/documents/{docId}")
    public String update(@PathVariable String docId, @RequestBody DocumentsTitleUpdateRequestDto requestDto){
        return service.update(docId, requestDto);
    }

    @DeleteMapping("/api/v1/documents/{docId}")
    public String delete(@PathVariable String docId){
        service.delete(docId);
        return docId;
    }


}
