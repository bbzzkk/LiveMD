package com.livemd.document.service;

import com.livemd.document.domain.entity.Documents;
import com.livemd.document.domain.repository.DocumentsRepository;
import com.livemd.document.dto.*;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.print.Doc;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class DocumentsService {

    private final DocumentsRepository repository;

    @Transactional
    public DocumentsIdResponseDto create(String oid, DocumentsSaveRequestDto requestDto) throws RuntimeException {
        Documents entity = repository.save(requestDto.toEntity());
        return new DocumentsIdResponseDto(entity);

    }

//    @Transactional
//    public List<DocumentsListResponseDto> findAllByOwner(String oid) {
//        return repository.findByOwnerId(oid).stream().map(DocumentsListResponseDto::new).collect(Collectors.toList());
//    }

    @Transactional
    public Page findAllByOwnerId(final Pageable pageable, String oid) throws NoSuchElementException{
        Page<Documents> page = repository.findAllByOwnerId(pageable, oid);
        Page<DocumentsResponseDto> dtoPage = page.map(documents -> new DocumentsResponseDto(documents));
        return dtoPage;
    }

//    @Transactional
//    public DocumentsResponseDto findByDocId(String docId){
//        Documents documents = repository.findByDocId(docId).orElseThrow(() -> new IllegalArgumentException("해당 문서가 존재하지 않습니다. documents id" + docId));
//
//        return new DocumentsResponseDto(documents);
//    }

    @Transactional
    public DocumentsResponseDto findByDocId(String docId) throws NoSuchElementException {
        Optional<Documents> optional = repository.findByDocId(docId);
        Documents documents = optional.get();
        return new DocumentsResponseDto(documents);
    }

    @Transactional
    public Page findAllByTitle(final Pageable pageable, String oid, String keyword) throws NoSuchElementException{
        Page<Documents> page = repository.findAllByOwnerIdAndTitleContaining(pageable, oid, keyword);
        Page<DocumentsResponseDto> dtoPage = page.map(documents -> new DocumentsResponseDto(documents));
        return dtoPage;
    }
    @Transactional
    public DocumentsIdResponseDto update(String docId, DocumentsTitleUpdateRequestDto requestDto){
        Optional<Documents> optional = repository.findByDocId(docId);
        Documents documents = optional.get();
        documents.update(requestDto.getTitle());

        return new DocumentsIdResponseDto(documents);
    }

    @Transactional
    public DocumentsIdResponseDto delete(String docId) throws NoSuchElementException{
        Optional<Documents> optional = repository.findByDocId(docId);
        Documents documents = optional.get();
        repository.delete(documents);

        return new DocumentsIdResponseDto(documents);
    }
}
