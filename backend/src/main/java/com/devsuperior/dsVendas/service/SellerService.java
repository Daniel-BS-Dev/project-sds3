package com.devsuperior.dsVendas.service;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.devsuperior.dsVendas.dto.SellerDTO;
import com.devsuperior.dsVendas.entities.Seller;
import com.devsuperior.dsVendas.repositories.SellerRepository;

@Service
public class SellerService {
	
	@Autowired
	 private SellerRepository repository;
	 
	 public List<SellerDTO> findAll(){
		 List<Seller> result = repository.findAll();
		 return result.stream().map(x -> new SellerDTO(x)).collect(Collectors.toList());
	 }

}
