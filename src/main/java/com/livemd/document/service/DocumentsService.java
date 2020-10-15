package com.livemd.document.service;

import com.livemd.document.domain.repository.DocumentsRepository;
import com.livemd.document.dto.DocumentsSaveRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class DocumentsService {

    private final DocumentsRepository repository;

    @Transactional
    public Long save(DocumentsSaveRequestDto requestDto){
        return repository.save(requestDto.toEntity()).getId();
    }
}
