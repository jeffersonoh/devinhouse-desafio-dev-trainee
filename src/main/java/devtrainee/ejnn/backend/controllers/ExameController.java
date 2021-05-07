package devtrainee.ejnn.backend.controllers;

import lombok.AllArgsConstructor;

import java.util.List;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;

import devtrainee.ejnn.backend.services.ExameService;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;

import devtrainee.ejnn.backend.dtos.ExameOutputDTO;

@RestController
@RequestMapping("/exames")
@AllArgsConstructor
public class ExameController {

    private ExameService exameService;

    @GetMapping
    public List<ExameOutputDTO> get() {
	return exameService.findAll();
    }

    @GetMapping("/page")
    public Page<ExameOutputDTO> getPage(@RequestParam int page,
					@RequestParam int size) {
	return exameService.findAll(PageRequest.of(page, size, Sort.unsorted()));
    };
}
