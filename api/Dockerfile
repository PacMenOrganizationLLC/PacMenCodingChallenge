FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build-env
WORKDIR /app

COPY *.csproj .
RUN dotnet restore

ENTRYPOINT ["dotnet", "watch", "run", "--AlwaysRestartOnRudeEdit"]