package br.edu.utfpr.pb.pw25s.server.controller;

import br.edu.utfpr.pb.pw25s.server.dto.MovementDTO;
import br.edu.utfpr.pb.pw25s.server.model.Movement;
import br.edu.utfpr.pb.pw25s.server.service.CrudService;
import br.edu.utfpr.pb.pw25s.server.service.MovementService;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("movements")
public class MovementController extends CrudController<Movement, MovementDTO, Long> {

    private static MovementService movementService;

    private static ModelMapper modelMapper;

    public MovementController(MovementService movementService,
                              ModelMapper modelMapper) {
        super(Movement.class, MovementDTO.class);
        this.movementService = movementService;
        this.modelMapper = modelMapper;
    }

    @Override
    protected CrudService<Movement, Long> getService() {
        return this.movementService;
    }

    @Override
    protected ModelMapper getModelMapper() {
        return this.modelMapper;
    }
}
