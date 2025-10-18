output "instance_public_ip" {
  value = aws_instance.app.public_ip
}

output "application_urls" {
  value = {
    fronted = "http://${aws_instance.app.public_ip}:3000"
    backend = "http://${aws_instance.app.public_ip}:5000/api/movies"
  }
}

