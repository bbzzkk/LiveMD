package com.livemd.document.controller;

import com.livemd.document.dto.*;
import com.livemd.document.envelope.DocumentsIdResponseEnvelope;
import com.livemd.document.envelope.DocumentsPageResponseEnvelope;
import com.livemd.document.envelope.DocumentsResponseEnvelope;
import com.livemd.document.service.DocumentsService;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.Response;

@RequestMapping("/api/v1/documents")
@RequiredArgsConstructor
@RestController
public class DocumentsApiController {

    private final DocumentsService service;

    @PostMapping
    public ResponseEntity<DocumentsIdResponseEnvelope> create(@RequestParam(value = "oid") String oid, @RequestBody DocumentsSaveRequestDto requestDto) throws Exception{
        DocumentsIdResponseDto data = service.create(oid, requestDto);
        DocumentsIdResponseEnvelope envelope = new DocumentsIdResponseEnvelope(200, true, data);
        ResponseEntity<DocumentsIdResponseEnvelope> responseEntity = new ResponseEntity<>(envelope, HttpStatus.OK);
        return responseEntity;
    }

//    @GetMapping("/api/v1/documents")
//    public List<DocumentsListResponseDto> findAll(@RequestParam(value = "oid") String oid) {
//        return service.findAllByOwner(oid);
//    }

    @GetMapping
    public ResponseEntity<DocumentsPageResponseEnvelope> findAllByOwnerId(final Pageable pageable, @RequestParam(value = "oid") String oid) {
        Page data =  service.findAllByOwnerId(pageable, oid);
        DocumentsPageResponseEnvelope envelope = new DocumentsPageResponseEnvelope(200, true, data);
        ResponseEntity<DocumentsPageResponseEnvelope> responseEntity = new ResponseEntity<>(envelope, HttpStatus.OK);
        return responseEntity;
    }

//    @GetMapping("{docId}")
//    public DocumentsResponseDto findByDocId(@PathVariable String docId){
//        return service.findByDocId(docId);
//    }

    @GetMapping("/{docId}")
    public ResponseEntity<DocumentsResponseEnvelope> findByDocId(@PathVariable String docId) throws RuntimeException {

//        if(service.findByDocId(docId) == null){
//
//            throw new RuntimeException();
//        }
        DocumentsResponseDto data =  service.findByDocId(docId);
        DocumentsResponseEnvelope envelop = new DocumentsResponseEnvelope(200, true, data);
        ResponseEntity<DocumentsResponseEnvelope> responseEntity = new ResponseEntity<>(envelop, HttpStatus.OK);
        return responseEntity;
    }


//    @GetMapping("search")
//    public Page searchByKeyword(final Pageable pageable, @RequestParam(value = "oid") String oid, @RequestParam(value = "keyword") String keyword){
//        return service.findAllByTitle(pageable, oid, keyword);
//    }

    @GetMapping("/search")
    public ResponseEntity<DocumentsPageResponseEnvelope> searchByKeyword(final Pageable pageable, @RequestParam(value = "oid") String oid, @RequestParam(value = "keyword") String keyword){
        Page data = service.findAllByTitle(pageable, oid, keyword);
        DocumentsPageResponseEnvelope envelope = new DocumentsPageResponseEnvelope (200, true, data);
        ResponseEntity<DocumentsPageResponseEnvelope> responseEntity = new ResponseEntity<>(envelope, HttpStatus.OK);
        return responseEntity;

    }

    @PutMapping("/{docId}")
    public ResponseEntity<DocumentsIdResponseEnvelope> update(@PathVariable String docId, @RequestBody DocumentsTitleUpdateRequestDto requestDto){
        DocumentsIdResponseDto data =  service.update(docId, requestDto);
        DocumentsIdResponseEnvelope envelope = new DocumentsIdResponseEnvelope (200, true, data);
        ResponseEntity<DocumentsIdResponseEnvelope> responseEntity = new ResponseEntity<>(envelope, HttpStatus.OK);
        return responseEntity;
    }

    @DeleteMapping("/{docId}")
    public ResponseEntity<DocumentsIdResponseEnvelope> delete(@PathVariable String docId){
        DocumentsIdResponseDto data =  service.delete(docId);
        DocumentsIdResponseEnvelope envelope = new DocumentsIdResponseEnvelope(200, true, data);
        ResponseEntity<DocumentsIdResponseEnvelope> responseEntity = new ResponseEntity<>(envelope, HttpStatus.OK);
        return responseEntity;
    }
}
