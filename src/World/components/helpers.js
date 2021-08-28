import { AxesHelper, GridHelper } from 'three';

function createAxesHelper() {
  const helper = new AxesHelper(30);
  helper.position.set(-3.5, 0, -3.5);
  return helper;
}

function createGridHelper() {
  const helper = new GridHelper(60);
  return helper;
}

function createAxesHelper2() {
  const helper2 = new AxesHelper(30);
  helper2.position.set(-3.5, -50, -3.5);
  return helper2;
}

function createGridHelper2() {
  const helper2 = new GridHelper(60);
  helper2.position.set(-3.5, -50, -3.5);
  return helper2;
}

export { createAxesHelper, createGridHelper, createAxesHelper2, createGridHelper2 };
