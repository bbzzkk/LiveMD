package com.livemd.document.controller;

import com.livemd.document.domain.entity.Documents;
import com.livemd.document.dto.*;
import com.livemd.document.service.DocumentsService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/v1/documents")
@RequiredArgsConstructor
@RestController
public class DocumentsApiController {

    private final DocumentsService service;

    @PostMapping
    public DocumentsIdResponseDto create(@RequestParam(value = "oid") String oid, @RequestBody DocumentsSaveRequestDto requestDto){
        return service.create(oid, requestDto);
    }

//    @GetMapping("/api/v1/documents")
//    public List<DocumentsListResponseDto> findAll(@RequestParam(value = "oid") String oid) {
//        return service.findAllByOwner(oid);
//    }

    @GetMapping
    public Page findAllByOwnerId(final Pageable pageable, @RequestParam(value = "oid") String oid){
        return service.findAllByOwnerId(pageable, oid);
    }

    @GetMapping("{docId}")
    public DocumentsResponseDto findByDocId(@PathVariable String docId){
        return service.findByDocId(docId);
    }

    @GetMapping("search")
    public Page searchByKeyword(final Pageable pageable, @RequestParam(value = "oid") String oid, @RequestParam(value = "keyword") String keyword){
        return service.findAllByTitle(pageable, oid, keyword);
    }

    @PutMapping("{docId}")
    public DocumentsIdResponseDto update(@PathVariable String docId, @RequestBody DocumentsTitleUpdateRequestDto requestDto){
        return service.update(docId, requestDto);
    }

    @DeleteMapping("{docId}")
    public DocumentsIdResponseDto delete(@PathVariable String docId){
        return service.delete(docId);
    }


}
