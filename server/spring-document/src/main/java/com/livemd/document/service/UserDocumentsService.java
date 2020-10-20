package com.livemd.document.service;

import com.livemd.document.domain.entity.UserDocuments;
import com.livemd.document.domain.repository.UserDocumentsRepository;
import com.livemd.document.dto.UserDocumentsListResponseDto;
import com.livemd.document.dto.UserDocumentsResponseDto;
import com.livemd.document.dto.UserDocumentsSaveRequestDto;
import com.livemd.document.dto.DocumentsTitleUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class UserDocumentsService {

    private final UserDocumentsRepository repository;

    @Transactional
    public Long create(UserDocumentsSaveRequestDto requestDto){
        return repository.save(requestDto.toEntity()).getId();
    }

    @Transactional
    public Long update(Long id, DocumentsTitleUpdateRequestDto requestDto){
        UserDocuments userDocuments = repository.findById(id).orElseThrow(() -> new IllegalArgumentException("해당 문서가 존재하지 않습니다. id" + id));
        userDocuments.update(requestDto.getTitle());

        return id;
    }

    public UserDocumentsResponseDto findById(Long id){
        UserDocuments userDocuments = repository.findById(id).orElseThrow(() -> new IllegalArgumentException("해당 문서가 존재하지 않습니다. id" + id));

        return new UserDocumentsResponseDto(userDocuments);
    }

    public void delete(Long id) {
        UserDocuments userDocuments = repository.findById(id).orElseThrow(() -> new IllegalArgumentException("해당 문서가 존재하지 않습니다. id" + id));

        repository.delete(userDocuments);
    }

    public List<UserDocumentsListResponseDto> findAll() {
        return repository.findAll().stream().map(UserDocumentsListResponseDto::new).collect(Collectors.toList());
    }
}
