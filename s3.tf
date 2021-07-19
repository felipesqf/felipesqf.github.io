
resource "aws_s3_bucket" "react_bucket" {
  bucket = "felipesqf.com"
  acl    = "public-read-write"
  force_destroy = true  
  policy = <<EOF
{
  "Id": "bucket_policy_site",
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "bucket_policy_site_main",
      "Action": [
        "s3:GetObject"
      ],
      "Effect": "Allow",
      "Resource": "arn:aws:s3:::felipesqf.com/*",
      "Principal": "*"
    }
  ]
}
EOF

  website {
    index_document = "index.html"
    error_document = "index.html"
  }

  provisioner "local-exec" {
    command = "npm run build && aws s3 sync build s3://felipesqf.com"
  }
}


locals {
  s3_origin_id = "myS3Origin"
}