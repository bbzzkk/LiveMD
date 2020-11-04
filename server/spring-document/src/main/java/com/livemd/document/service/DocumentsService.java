package com.livemd.document.service;

import com.livemd.document.domain.entity.Documents;
import com.livemd.document.domain.repository.DocumentsRepository;
import com.livemd.document.dto.*;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class DocumentsService {

    private final DocumentsRepository repository;

    @Transactional
    public DocumentsIdResponseDto create(String oid, DocumentsSaveRequestDto requestDto){
        requestDto.setOwnerId(oid);
        Documents entity = repository.save(requestDto.toEntity());
        return new DocumentsIdResponseDto(entity);

    }

//    @Transactional
//    public List<DocumentsListResponseDto> findAllByOwner(String oid) {
//        return repository.findByOwnerId(oid).stream().map(DocumentsListResponseDto::new).collect(Collectors.toList());
//    }

    @Transactional
    public Page findAllByOwnerId(final Pageable pageable, String oid){
        Page<Documents> page = repository.findAllByOwnerId(pageable, oid);
        Page<DocumentsResponseDto> dtoPage = page.map(documents -> new DocumentsResponseDto(documents));
        return dtoPage;
    }

    @Transactional
    public DocumentsResponseDto findByDocId(String docId){
        Documents documents = repository.findByDocId(docId).orElseThrow(() -> new IllegalArgumentException("해당 문서가 존재하지 않습니다. documents id" + docId));

        return new DocumentsResponseDto(documents);
    }

    @Transactional
    public DocumentsIdResponseDto update(String docId, DocumentsTitleUpdateRequestDto requestDto){
        Documents documents = repository.findByDocId(docId).orElseThrow(() -> new IllegalArgumentException("해당 문서가 존재하지 않습니다. documents id" + docId));
        documents.update(requestDto.getTitle());

        return new DocumentsIdResponseDto(documents);
    }

    @Transactional
    public DocumentsIdResponseDto delete(String docId) {
        Documents documents = repository.findByDocId(docId).orElseThrow(() -> new IllegalArgumentException("해당 문서가 존재하지 않습니다. documents id" + docId));

        repository.delete(documents);

        return new DocumentsIdResponseDto(documents);
    }
}
