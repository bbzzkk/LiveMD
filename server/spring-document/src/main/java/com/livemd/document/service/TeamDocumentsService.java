package com.livemd.document.service;

import com.livemd.document.domain.entity.TeamDocuments;
import com.livemd.document.domain.repository.TeamDocumentsRepository;
import com.livemd.document.dto.TeamDocumentsListResponseDto;
import com.livemd.document.dto.TeamDocumentsResponseDto;
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

    @Transactional
    public TeamDocumentsResponseDto findById(Long id){
        TeamDocuments teamDocuments = repository.findById(id).orElseThrow(()-> new IllegalArgumentException("해당 문서가 존재하지 않습니다. id" + id));

        return new TeamDocumentsResponseDto(teamDocuments);
    }

}
