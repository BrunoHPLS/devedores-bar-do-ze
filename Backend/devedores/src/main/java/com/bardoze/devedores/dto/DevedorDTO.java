package com.bardoze.devedores.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
public class DevedorDTO {

    private Long id;

    @NotNull
    private String nome;

    @NotNull
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    private LocalDate dataDivida;

    private Integer dias;

    @NotNull
    private BigDecimal valor;

    public DevedorDTO(Long id,String nome,LocalDate dataDivida,BigDecimal valor){
        this.id=id;
        this.nome=nome;
        this.dataDivida=dataDivida;
        this.valor=valor;
    }

}
