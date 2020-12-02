package com.livemd.document.controller;

import com.livemd.document.domain.entity.Documents;
import com.livemd.document.dto.*;
import com.livemd.document.envelope.DocumentsIdResponseEnvelope;
import com.livemd.document.envelope.DocumentsPageResponseEnvelope;
import com.livemd.document.envelope.DocumentsResponseEnvelope;
import com.livemd.document.service.DocumentsService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.NoSuchElementException;

@RequestMapping("/api/v1/documents")
@RequiredArgsConstructor
@RestController
public class DocumentsApiController {

    private final DocumentsService service;

    @PostMapping
    public ResponseEntity<DocumentsIdResponseEnvelope> create(@RequestParam(value = "oid") String oid, @RequestBody DocumentsSaveRequestDto requestDto) throws RuntimeException {
        requestDto.setOwnerId(oid);
        DocumentsIdResponseDto data = service.create(oid, requestDto);
        DocumentsIdResponseEnvelope envelope = new DocumentsIdResponseEnvelope(200, true, data);
        ResponseEntity<DocumentsIdResponseEnvelope> responseEntity = new ResponseEntity<>(envelope, HttpStatus.OK);
        return responseEntity;
    }

    @GetMapping
    public ResponseEntity<DocumentsPageResponseEnvelope> findAllByOwnerId (final Pageable pageable, @RequestParam(value = "oid") String oid) {
        Page data =  service.findAllByOwnerId(pageable, oid);
        // if(data.isEmpty()){
        //   throw new NoSuchElementException();
        // }
        System.out.println(data);
        int status;
        if(data.isEmpty()){
            DocumentsPageResponseEnvelope envelope = new DocumentsPageResponseEnvelope(404, true, data);
            ResponseEntity<DocumentsPageResponseEnvelope> responseEntity = new ResponseEntity<>(envelope, HttpStatus.OK);
            return responseEntity;
        }
        else{
            DocumentsPageResponseEnvelope envelope = new DocumentsPageResponseEnvelope(200, true, data);
            ResponseEntity<DocumentsPageResponseEnvelope> responseEntity = new ResponseEntity<>(envelope, HttpStatus.OK);
            return responseEntity;
        }
        // DocumentsPageResponseEnvelope envelope = new DocumentsPageResponseEnvelope(status, true, data);
        // ResponseEntity<DocumentsPageResponseEnvelope> responseEntity = new ResponseEntity<>(envelope, HttpStatus.OK);
        // return responseEntity;
    }

    @GetMapping("/{docId}")
    public ResponseEntity<DocumentsResponseEnvelope> findByDocId(@PathVariable String docId) throws NoSuchElementException {

        DocumentsResponseDto data =  service.findByDocId(docId);
        DocumentsResponseEnvelope envelop = new DocumentsResponseEnvelope(200, true, data);
        ResponseEntity<DocumentsResponseEnvelope> responseEntity = new ResponseEntity<>(envelop, HttpStatus.OK);
        return responseEntity;
    }


    @GetMapping("/search")
    public ResponseEntity<DocumentsPageResponseEnvelope> searchByKeyword(final Pageable pageable, @RequestParam(value = "oid") String oid, @RequestParam(value = "keyword") String keyword) {
        Page data = service.findAllByTitle(pageable, oid, keyword);
        // if(data.isEmpty()){
        //     throw new NoSuchElementException();
        // }
        int status;
        if(data.isEmpty()){
            status = 404;
        }
        else{
            status = 200;
        }
        DocumentsPageResponseEnvelope envelope = new DocumentsPageResponseEnvelope (status, true, data);
        ResponseEntity<DocumentsPageResponseEnvelope> responseEntity = new ResponseEntity<>(envelope, HttpStatus.OK);
        return responseEntity;

    }

    @PutMapping("/{docId}")
    public ResponseEntity<DocumentsIdResponseEnvelope> update(@PathVariable String docId, @RequestBody DocumentsTitleUpdateRequestDto requestDto) throws NoSuchElementException{
        DocumentsIdResponseDto data =  service.update(docId, requestDto);
        DocumentsIdResponseEnvelope envelope = new DocumentsIdResponseEnvelope (200, true, data);
        ResponseEntity<DocumentsIdResponseEnvelope> responseEntity = new ResponseEntity<>(envelope, HttpStatus.OK);
        return responseEntity;
    }

    @PutMapping("/mark/{documentId}")
    public ResponseEntity<DocumentsIdResponseEnvelope> updateMarked(@PathVariable String documentId) {
        DocumentsIdResponseDto data = service.updateMarked(documentId);
        DocumentsIdResponseEnvelope envelope = new DocumentsIdResponseEnvelope(200, true, data);
        ResponseEntity<DocumentsIdResponseEnvelope> responseEntity = new ResponseEntity<>(envelope, HttpStatus.OK);
        return responseEntity;
    }

    @DeleteMapping("/{docId}")
    public ResponseEntity<DocumentsIdResponseEnvelope> delete(@PathVariable String docId) throws NoSuchElementException{
        DocumentsIdResponseDto data =  service.delete(docId);
        DocumentsIdResponseEnvelope envelope = new DocumentsIdResponseEnvelope(200, true, data);
        ResponseEntity<DocumentsIdResponseEnvelope> responseEntity = new ResponseEntity<>(envelope, HttpStatus.OK);
        return responseEntity;
    }
}
