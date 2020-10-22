package com.livemd.document.controller;

import com.livemd.document.dto.TeamDocumentsListResponseDto;
import com.livemd.document.dto.TeamDocumentsSaveRequestDto;
import com.livemd.document.service.TeamDocumentsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class TeamDocumentsApiController {

    private final TeamDocumentsService service;

    @PostMapping("/api/v1/team-documents")
    public Long create(@RequestBody TeamDocumentsSaveRequestDto requestDto){
        return service.create(requestDto);
    }

    @GetMapping("/api/v1/user-documents")
    public List<TeamDocumentsListResponseDto> findAll(){
        return service.findAll();
    }
}
