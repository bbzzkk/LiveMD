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
    public Long save(DocumentsSaveRequestDto requestDto){
        return repository.save(requestDto.toEntity()).getId();
    }

    @Transactional
    public Long update(Long id, DocumentsTitleUpdateRequestDto requestDto){
        Documents documents = repository.findById(id).orElseThrow(() -> new IllegalArgumentException("해당 문서가 존재하지 않습니다. id" + id));
        documents.update(requestDto.getTitle());

        return id;
    }

    public DocumentsResponseDto findById(Long id){
        Documents documents = repository.findById(id).orElseThrow(() -> new IllegalArgumentException("해당 문서가 존재하지 않습니다. id" + id));

        return new DocumentsResponseDto(documents);
    }

    public void delete(Long id) {
        Documents documents = repository.findById(id).orElseThrow(() -> new IllegalArgumentException("해당 문서가 존재하지 않습니다. id" + id));

        repository.delete(documents);
    }

    public List<DocumentsListResponseDto> findAll() {
        return repository.findAll().stream().map(DocumentsListResponseDto::new).collect(Collectors.toList());
    }
}
