package com.livemd.document.domain.repository;

import com.livemd.document.domain.entity.Documents;
import com.livemd.document.dto.DocumentsResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface DocumentsRepository extends JpaRepository<Documents, Long> {
    Page<Documents> findAllByOwnerId(Pageable pageable, String ownerId);
//    List<Documents> findByOwnerId(String ownerId);
    Optional<Documents> findByDocId(String docId);
    Page<Documents> findAllByOwnerIdAndTitleContaining(Pageable pageable, String ownerId, String keyword);
}
