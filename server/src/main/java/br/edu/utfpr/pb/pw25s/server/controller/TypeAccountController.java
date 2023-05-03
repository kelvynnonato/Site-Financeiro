package br.edu.utfpr.pb.pw25s.server.controller;

import br.edu.utfpr.pb.pw25s.server.dto.ProductDTO;
import br.edu.utfpr.pb.pw25s.server.dto.TypeAccountDTO;
import br.edu.utfpr.pb.pw25s.server.model.Product;
import br.edu.utfpr.pb.pw25s.server.model.TypeAccount;
import br.edu.utfpr.pb.pw25s.server.service.CrudService;
import br.edu.utfpr.pb.pw25s.server.service.ProductService;
import br.edu.utfpr.pb.pw25s.server.service.TypeAccountService;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("typeaccounts")
public class TypeAccountController extends CrudController<TypeAccount, TypeAccountDTO, Long> {
    private static TypeAccountService typeAccountService;

    private static ModelMapper modelMapper;

    public TypeAccountController(TypeAccountService typeAccountService,
                                 ModelMapper modelMapper) {
        super(TypeAccount.class, TypeAccountDTO.class);
        this.typeAccountService = typeAccountService;
        this.modelMapper = modelMapper;

    }

    @Override
    protected CrudService<TypeAccount, Long> getService() {
        return this.typeAccountService;
    }

    @Override
    protected ModelMapper getModelMapper() {
        return this.modelMapper;
    }
}
