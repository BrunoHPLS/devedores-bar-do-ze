package com.bardoze.devedores.mapper;

import com.bardoze.devedores.dto.DevedorDTO;
import com.bardoze.devedores.entity.Devedor;
import org.springframework.stereotype.Component;

import java.time.Duration;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class DevedorMapper {
    public Devedor toEntity(DevedorDTO dto){
        Devedor entity = new Devedor();
        entity.setId(dto.getId());
        entity.setNome(dto.getNome());
        entity.setDataDivida(dto.getDataDivida());
        entity.setValor(dto.getValor());
        return entity;
    }

    public List<Devedor> toEntity(List<DevedorDTO> listDTO){
        return listDTO.stream().map(this::toEntity).collect(Collectors.toList());
    }

    public DevedorDTO toDTO(Devedor entity){
        DevedorDTO dto = new DevedorDTO(
            entity.getId(),entity.getNome(),entity.getDataDivida(),entity.getValor()
        );

        dto.setDias((int) ChronoUnit.DAYS.between(dto.getDataDivida(), LocalDate.now()));

        return dto;
    }

    public List<DevedorDTO> toDTO(List<Devedor> listEntity){
        return listEntity.stream().map(this::toDTO).collect(Collectors.toList());
    }
}
