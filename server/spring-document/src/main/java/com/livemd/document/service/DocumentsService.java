package com.livemd.document.service;

import com.livemd.document.domain.entity.Documents;
import com.livemd.document.domain.repository.DocumentsRepository;
import com.livemd.document.dto.DocumentsListResponseDto;
import com.livemd.document.dto.DocumentsResponseDto;
import com.livemd.document.dto.DocumentsSaveRequestDto;
import com.livemd.document.dto.DocumentsTitleUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class DocumentsService {

    private final DocumentsRepository repository;

    @Transactional
    public Long create(String oid, DocumentsSaveRequestDto requestDto){
        requestDto.setOwnerId(oid);
        return repository.save(requestDto.toEntity()).getId();
    }

    @Transactional
    public List<DocumentsListResponseDto> findAllByOwner(String oid) {
        return repository.findByOwnerId(oid).stream().map(DocumentsListResponseDto::new).collect(Collectors.toList());
    }

    @Transactional
    public DocumentsResponseDto findByDocId(String docId){
        Documents documents = repository.findByDocId(docId).orElseThrow(() -> new IllegalArgumentException("해당 문서가 존재하지 않습니다. documents id" + docId));

        return new DocumentsResponseDto(documents);
    }

    @Transactional
    public String update(String docId, DocumentsTitleUpdateRequestDto requestDto){
        Documents documents = repository.findByDocId(docId).orElseThrow(() -> new IllegalArgumentException("해당 문서가 존재하지 않습니다. documents id" + docId));
        documents.update(requestDto.getTitle());

        return docId;
    }

    @Transactional
    public void delete(String docId) {
        Documents documents = repository.findByDocId(docId).orElseThrow(() -> new IllegalArgumentException("해당 문서가 존재하지 않습니다. documents id" + docId));

        repository.delete(documents);
    }
}
