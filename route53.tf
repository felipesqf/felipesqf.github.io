data "aws_acm_certificate" "felipesqf" {
  domain   = "*.felipesqf.com"
  statuses = ["ISSUED"]
}

data "aws_acm_certificate" "felipesqfcom" {
  domain   = "felipesqf.com"
  statuses = ["ISSUED"]
}

data "aws_route53_zone" "felipesqf" {
  name = "felipesqf.com"
}

resource "aws_route53_record" "felipesqf" {
  zone_id = data.aws_route53_zone.felipesqf.zone_id
  name    = ""
  type    = "A"
  alias {
    name                   = aws_s3_bucket.react_bucket.website_endpoint
    zone_id                = aws_s3_bucket.react_bucket.hosted_zone_id
    evaluate_target_health = true
  }
}