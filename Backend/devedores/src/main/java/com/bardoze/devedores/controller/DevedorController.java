package com.bardoze.devedores.controller;

import com.bardoze.devedores.dto.DevedorDTO;
import com.bardoze.devedores.service.DevedorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/devedores")
public class DevedorController {

    @Autowired
    private DevedorService service;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<DevedorDTO>> get(){
        return new ResponseEntity<>(service.readAll(), HttpStatus.OK);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE )
    public ResponseEntity<DevedorDTO> post(@RequestBody DevedorDTO dto){
        DevedorDTO saved = null;
        HttpStatus status = HttpStatus.CREATED;
        try {
            saved = service.insert(dto);
        }catch (IllegalArgumentException exception){
            status = HttpStatus.NOT_ACCEPTABLE;
        }
        return new ResponseEntity<>(saved,status);
    }

    @PutMapping(path = "/{id}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE )
    public ResponseEntity<DevedorDTO> put(@PathVariable Long id, @RequestBody DevedorDTO dto){
        DevedorDTO updated = null;
        HttpStatus status = HttpStatus.ACCEPTED;
        try{
            updated = service.alter(dto);
        }catch (IllegalArgumentException exception){
            status = HttpStatus.NOT_MODIFIED;
        }
        return new ResponseEntity<>(updated,status);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<DevedorDTO> delete(@PathVariable Long id){
        DevedorDTO deleted = null;
        HttpStatus status = HttpStatus.OK;
        try{
            deleted = service.remove(id);
        }catch (IllegalArgumentException exception){
            status = HttpStatus.NOT_MODIFIED;
        }
        return new ResponseEntity<>(deleted,status);
    }

}
