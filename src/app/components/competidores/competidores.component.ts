import { Component, inject, ViewChild } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { competidor } from 'src/app/models/competidor.model';
import { categoria } from 'src/app/models/filterobjects/categoria.models';
import { genero } from 'src/app/models/filterobjects/genero.models';
import { cinturon } from 'src/app/models/filterobjects/cinturon.model';
@Component({
  selector: 'app-competidores',
  templateUrl: './competidores.component.html',
  styleUrls: ['./competidores.component.css']
})
export class CompetidoresComponent {
  http = inject(HttpClient)
  displayedColumns: string[] = [ 'nombre','apellido','cinturon', 'peso', 'categoria'];
  filteredCompetitors: competidor[] = [];

  dataSource = new MatTableDataSource<competidor>();

  beltselect='';
  weightselect ='';
  genderselect= '';
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(){
    this.filteredCompetitors = this.ELEMENT_DATA;
    this.dataSource = new MatTableDataSource<competidor>(this.ELEMENT_DATA)
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  listCompetitors(){
    this.http.get('competidores')
    //this.competitors = "did an http request"
  }

  filtergender(){
    let filteredData = this.ELEMENT_DATA.filter(item =>{
      return item.genero.toLowerCase() ==  this.genderselect.toLowerCase();
    })
    this.dataSource = new MatTableDataSource(filteredData)
  }
  filterweight(){
    let filteredData = this.ELEMENT_DATA.filter(item =>{
      return item.categoria.toLowerCase() ==  this.weightselect.toLowerCase();
    })
    this.dataSource = new MatTableDataSource(filteredData);
  }
  filterbelt(){
    let filteredData = this.ELEMENT_DATA.filter(item =>{
      return item.cinturon.toLowerCase() ==  this.beltselect.toLowerCase();
    })
    this.dataSource = new MatTableDataSource(filteredData);
  }

  filter(){

  }
  ELEMENT_DATA: competidor[] = [
    {nombre: "juan", apellido: "alvarez", cinturon:"blanco", peso: 65, categoria:"leve", genero: "masculino"},
    {nombre: "pepito", apellido: "perez", cinturon:"blanco", peso: 65, categoria:"leve",  genero: "masculino"},
    {nombre: "juan", apellido: "alvarez", cinturon:"azul", peso: 65, categoria:"medio", genero: "masculino"},
    {nombre: "pepito", apellido: "perez", cinturon:"azul", peso: 65, categoria:"medio", genero: "masculino"},
    {nombre: "juan", apellido: "alvarez", cinturon:"purpura", peso: 65, categoria:"pesado", genero: "masculino"},
    {nombre: "pepito", apellido: "perez", cinturon:"purpura", peso: 65, categoria:"pesado", genero: "masculino"},
    {nombre: "juan", apellido: "alvarez", cinturon:"marron", peso: 65, categoria:"leve", genero: "masculino"},
    {nombre: "pepito", apellido: "perez", cinturon:"marron", peso: 65, categoria:"medio", genero: "masculino"},
    {nombre: "juan", apellido: "alvarez", cinturon:"preta", peso: 65, categoria:"pesado", genero: "masculino"},
    {nombre: "pepito", apellido: "perez", cinturon:"preta", peso: 65, categoria:"leve", genero: "masculino"},
  ];

  belt: cinturon[] =[ {color: ''},{color: 'blanco'}, {color: 'azul'}, {color: 'purpura'}, {color: 'marron'}, {color: 'negro'} ];
  gender: genero[] = [ {name:''},{name: 'masculino'}, {name:'femenino'} ];
  weight: categoria[] = [ {nombre:'',peso:''},{nombre: 'leve', peso: '50'}, {nombre: 'medio', peso: '65'}, {nombre: 'pesado', peso: '80'} ]
}






