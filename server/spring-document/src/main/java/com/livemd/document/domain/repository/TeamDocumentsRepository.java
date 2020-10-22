package com.livemd.document.domain.repository;

import com.livemd.document.domain.entity.TeamDocuments;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamDocumentsRepository extends JpaRepository<TeamDocuments, Long> {
}
