document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("meuVideo");
    const musica = document.getElementById("minhaMusica");

    const playVideo = document.getElementById("playVideo");
    const pauseVideo = document.getElementById("pauseVideo");
    const volumeUpVideo = document.getElementById("volumeUpVideo");
    const volumeDownVideo = document.getElementById("volumeDownVideo");
    const muteVideo = document.getElementById("muteVideo");

    const playMusic = document.getElementById("playMusic");
    const pauseMusic = document.getElementById("pauseMusic");
    const volumeUpMusic = document.getElementById("volumeUpMusic");
    const volumeDownMusic = document.getElementById("volumeDownMusic");
    const muteMusic = document.getElementById("muteMusic");

    const videoVolumeFill = document.getElementById("videoVolumeFill");
    const musicVolumeFill = document.getElementById("musicVolumeFill");

    const notificacao = document.getElementById("notificacao");

    function mostrarNotificacao(mensagem) {
        notificacao.textContent = mensagem;
        notificacao.style.opacity = "1";
        setTimeout(() => { notificacao.style.opacity = "0"; }, 2000);
    }

    function atualizarBarraVideo() {
        videoVolumeFill.style.width = (video.muted ? 0 : video.volume * 100) + "%";
    }
    function atualizarBarraMusica() {
        musicVolumeFill.style.width = (musica.muted ? 0 : musica.volume * 100) + "%";
    }

    // Inicializa barras
    atualizarBarraVideo();
    atualizarBarraMusica();

    // ----------------- Controles do vídeo -----------------
    playVideo.addEventListener("click", () => {
        video.play();
        mostrarNotificacao("🎬 Vídeo iniciado");
        alert("Play do vídeo pressionado!"); // ALERT adicionada
    });

    pauseVideo.addEventListener("click", () => {
        video.pause();
        mostrarNotificacao("⏸ Vídeo pausado");
        alert("Pause do vídeo pressionado!"); // ALERT adicionada
    });

    volumeUpVideo.addEventListener("click", () => {
        video.volume = Math.min(1, video.volume + 0.1);
        mostrarNotificacao("🎬 Volume: " + Math.round(video.volume*100) + "%");
        atualizarBarraVideo();
    });
    volumeDownVideo.addEventListener("click", () => {
        video.volume = Math.max(0, video.volume - 0.1);
        mostrarNotificacao("🎬 Volume: " + Math.round(video.volume*100) + "%");
        atualizarBarraVideo();
    });
    muteVideo.addEventListener("click", () => {
        video.muted = !video.muted;
        mostrarNotificacao(video.muted ? "🎬 Mute ativado" : "🎬 Mute desativado");
        atualizarBarraVideo();
    });

    // ----------------- Controles da música -----------------
    playMusic.addEventListener("click", () => {
        musica.play();
        mostrarNotificacao("🎵 Música iniciada");
        alert("Play da música pressionado!"); // ALERT adicionada
    });

    pauseMusic.addEventListener("click", () => {
        musica.pause();
        mostrarNotificacao("⏸ Música pausada");
        alert("Pause da música pressionado!"); // ALERT adicionada
    });

    volumeUpMusic.addEventListener("click", () => {
        musica.volume = Math.min(1, musica.volume + 0.1);
        mostrarNotificacao("🎵 Volume: " + Math.round(musica.volume*100) + "%");
        atualizarBarraMusica();
    });
    volumeDownMusic.addEventListener("click", () => {
        musica.volume = Math.max(0, musica.volume - 0.1);
        mostrarNotificacao("🎵 Volume: " + Math.round(musica.volume*100) + "%");
        atualizarBarraMusica();
    });
    muteMusic.addEventListener("click", () => {
        musica.muted = !musica.muted;
        mostrarNotificacao(musica.muted ? "🎵 Mute ativado" : "🎵 Mute desativado");
        atualizarBarraMusica();
    });
});