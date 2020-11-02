package com.livemd.document.domain.repository;

import com.livemd.document.domain.entity.Documents;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface DocumentsRepository extends JpaRepository<Documents, Long> {
    List<Documents> findByOwnerId(String ownerId);
    Optional<Documents> findByDocId(String docId);
}
