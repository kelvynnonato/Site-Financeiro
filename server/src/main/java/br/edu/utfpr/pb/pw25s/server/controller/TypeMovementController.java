package br.edu.utfpr.pb.pw25s.server.controller;

import br.edu.utfpr.pb.pw25s.server.dto.TypeAccountDTO;
import br.edu.utfpr.pb.pw25s.server.dto.TypeMovementDTO;
import br.edu.utfpr.pb.pw25s.server.model.TypeAccount;
import br.edu.utfpr.pb.pw25s.server.model.TypeMovement;
import br.edu.utfpr.pb.pw25s.server.service.CrudService;
import br.edu.utfpr.pb.pw25s.server.service.TypeMovementService;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("typemovements")
public class TypeMovementController extends CrudController<TypeMovement, TypeMovementDTO, Long> {

    private static TypeMovementService typeMovementService;

    private static ModelMapper modelMapper;

    public TypeMovementController(TypeMovementService typeMovementService,
                                  ModelMapper modelMapper){
        super(TypeMovement.class, TypeMovementDTO.class);
        this.typeMovementService = typeMovementService;
        this.modelMapper = modelMapper;
    }

    @Override
    protected CrudService<TypeMovement, Long> getService() {
        return this.typeMovementService;
    }

    @Override
    protected ModelMapper getModelMapper() {
        return this.modelMapper;
    }
}
