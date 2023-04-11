package br.edu.utfpr.pb.pw25s.server.controller;

import br.edu.utfpr.pb.pw25s.server.dto.CategoryDTO;
import br.edu.utfpr.pb.pw25s.server.model.Category;
import br.edu.utfpr.pb.pw25s.server.service.CategoryService;
import br.edu.utfpr.pb.pw25s.server.service.CrudService;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("categories")
public class CategoryController extends CrudController<Category, CategoryDTO, Long> {

    private static CategoryService categoryService;
    private static ModelMapper modelMapper;

    public CategoryController(CategoryService categoryService,
                              ModelMapper modelMapper){
        super(Category.class, CategoryDTO.class);
        this.categoryService = categoryService;
        this.modelMapper = modelMapper;
    }

    @Override
    protected CrudService<Category, Long> getService(){
        return this.categoryService;
    }

    @Override
    protected ModelMapper getModelMapper(){
        return this.modelMapper;
    }
/*
    @PostMapping
    public ResponseEntity<CategoryDTO> create(@RequestBody @Valid CategoryDTO category) {
        Category categorySaved =  categoryService.create(convertToEntity(category));
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .buildAndExpand(category.getId()).toUri();

        return  ResponseEntity.created(location).body(convertToDTO(categorySaved));
    }

    @PutMapping("{id}") //http://localhost:8025/categories/{id} em que {id} = um long
    public ResponseEntity<Category> update(@RequestBody @Valid Category category,
                                           @PathVariable Long id) {
        categoryService.update(category);
        return  ResponseEntity.ok(category);
    }

    @GetMapping
    public ResponseEntity<List<CategoryDTO>> findAll() {

        return ResponseEntity.ok(
                categoryService.findAll().stream().map(
                        this::convertToDTO).collect(Collectors.toList()
                )
        );
    }

    @GetMapping("{id}")
    public ResponseEntity<Category> findOne(@PathVariable(name = "id") Long id) {
        return ResponseEntity.ok(categoryService.findOne(id));
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable(name = "id") Long id) {
        categoryService.delete(id);
    }

    private Category convertToEntity(CategoryDTO categoryDTO){
        return modelMapper.map(categoryDTO, Category.class);
    }

    private CategoryDTO convertToDTO(Category category){
        return modelMapper.map(category, CategoryDTO.class);
    }
    */

}
