import React from "react";
import "tailwindcss/tailwind.css";

export default function Main() {
    return (
        <div className="bg-[#06092b] text-white w-full h-full p-12 text-center flex flex-col items-center justify-center">
            <img
                className="w-64 mb-8"
                src="/img/logo.svg"
                alt="Logo com um átomo na cor branca com fundo rosa ao lado do texto React Avançado"
            />
            <h1 className="text-5xl">Boilerplate</h1>
            <div className="text-5xl font-medium">Typescript, ReactJS, NextJS e Tailwind</div>
            <img
                className="mt-12 w-[30rem] max-w-full"
                src="/img/hero-illustration.svg"
                alt="Imagem de um desenvolvedor de frente para a tela com código"
            />
        </div>
    );
}
