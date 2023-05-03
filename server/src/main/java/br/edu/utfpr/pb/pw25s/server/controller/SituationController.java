package br.edu.utfpr.pb.pw25s.server.controller;

import br.edu.utfpr.pb.pw25s.server.dto.ProductDTO;
import br.edu.utfpr.pb.pw25s.server.dto.SituationDTO;
import br.edu.utfpr.pb.pw25s.server.model.Product;
import br.edu.utfpr.pb.pw25s.server.model.Situation;
import br.edu.utfpr.pb.pw25s.server.service.CrudService;
import br.edu.utfpr.pb.pw25s.server.service.ProductService;
import br.edu.utfpr.pb.pw25s.server.service.SituationService;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("situations")
public class SituationController extends  CrudController<Situation, SituationDTO, Long> {

    private static SituationService situationService;

    private static ModelMapper modelMapper;

    public SituationController(SituationService situationService,
                               ModelMapper modelMapper) {
        super(Situation.class, SituationDTO.class);
        this.situationService = situationService;
        this.modelMapper = modelMapper;
    }

    @Override
    protected CrudService<Situation, Long> getService() {
        return this.situationService;
    }

    @Override
    protected ModelMapper getModelMapper() {
        return this.modelMapper;
    }
}
