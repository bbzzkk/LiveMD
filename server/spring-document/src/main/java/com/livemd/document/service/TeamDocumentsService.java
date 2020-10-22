package com.livemd.document.service;

import com.livemd.document.domain.repository.TeamDocumentsRepository;
import com.livemd.document.dto.TeamDocumentsListResponseDto;
import com.livemd.document.dto.TeamDocumentsSaveRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class TeamDocumentsService {

    private final TeamDocumentsRepository repository;

    @Transactional
    public Long create(TeamDocumentsSaveRequestDto requestDto){
        return repository.save(requestDto.toEntity()).getId();
    }

    @Transactional
    public List<TeamDocumentsListResponseDto> findAll(){
        return repository.findAll().stream().map(TeamDocumentsListResponseDto::new).collect(Collectors.toList());

    }

}
