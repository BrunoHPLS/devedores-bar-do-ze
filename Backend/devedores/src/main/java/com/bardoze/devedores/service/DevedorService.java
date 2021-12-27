package com.bardoze.devedores.service;


import com.bardoze.devedores.dto.DevedorDTO;
import com.bardoze.devedores.entity.Devedor;
import com.bardoze.devedores.mapper.DevedorMapper;
import com.bardoze.devedores.repository.DevedorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class DevedorService {

    @Autowired
    private DevedorRepository repository;

    @Autowired
    private DevedorMapper mapper;

    public DevedorDTO insert(DevedorDTO dto) throws IllegalArgumentException{
        if(!(dto.getId()==null)){
            throw new IllegalArgumentException("Inserts não podem conter um id");
        }
        dto = mapper.toDTO(
                repository.save(
                        mapper.toEntity(dto)));
        return dto;
    }

    public DevedorDTO alter(DevedorDTO dto) throws IllegalArgumentException{
        Optional<Devedor> entity = repository.findById(dto.getId());
        if(!entity.isPresent()){
            throw new IllegalArgumentException("Este Id não existe");
        }
        repository.save(mapper.toEntity(dto));
        return dto;
    }

    public DevedorDTO remove(Long id) throws IllegalArgumentException{
        Optional<Devedor> entity = repository.findById(id);
        if(!entity.isPresent()){
            throw new IllegalArgumentException("Este Id não existe");
        }
        repository.deleteById(id);
        return mapper.toDTO(entity.get());
    }

    public List<DevedorDTO> readAll(){
        List<Devedor> list = repository.findAll();
        return mapper.toDTO(list);
    }
}
