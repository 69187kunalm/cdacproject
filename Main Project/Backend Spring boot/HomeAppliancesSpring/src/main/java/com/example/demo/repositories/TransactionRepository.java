package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entities.Transaction;
import com.example.demo.entities.User;

public interface TransactionRepository extends JpaRepository<Transaction, Integer> {
	
	@Query("select t from Transaction t where t.touser= :id")
	public List<Transaction> getByOwnerId(User id);
	
	@Query("select t from Transaction t where t.doneby= :id")
	public List<Transaction> getByUserId(User id);
}
