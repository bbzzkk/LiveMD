package com.livemd.document.domain.repository;

import com.livemd.document.domain.entity.UserDocuments;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDocumentsRepository extends JpaRepository<UserDocuments, Long> {

}
