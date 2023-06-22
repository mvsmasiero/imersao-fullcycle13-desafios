FROM golang:1.20-alpine3.18 as builder
WORKDIR /build
COPY go/* ./
RUN CGO_ENABLED=0 go build -ldflags="-s -w" -o hello .

FROM scratch
WORKDIR /app
COPY --from=builder /build/hello .
ENTRYPOINT [ "./hello" ]